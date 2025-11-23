import { useState, useRef } from "react";
import { filesystem } from "@neutralinojs/lib";

export const ImageConverter = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [base64, setBase64] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      setMessage(null);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setMessage("Please select a valid image file");
    }
  };

  const handleSave = async () => {
    if (!file) {
      setMessage("Please select an image first");
      return;
    }

    setSaving(true);
    setMessage(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      const extension = file.name.split(".").pop() || "png";
      const fileName = `image_${Date.now()}.${extension}`;
      const savePath = `./uploads/${fileName}`;

      await filesystem.writeBinaryFile(savePath, buffer);

      setMessage(`Image saved successfully to ${savePath}`);
      setFile(null);
      setPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error saving file:", error);
      setMessage(
        `Error saving file: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setSaving(false);
    }
  };

  const handleConvertToBase64 = () => {
    if (!file) {
      setMessage("Please select an image first");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      console.log("base64String", base64String);

      setBase64(base64String);
      setMessage("Image converted to base64 successfully");
    };
    reader.onerror = () => {
      setMessage("Error converting image to base64");
    };
    reader.readAsDataURL(file);
  };

  const handleClear = () => {
    setFile(null);
    setPreview(null);
    setMessage(null);
    setBase64("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div style={{ padding: "16px" }}>
      <h2>Image Upload & Save</h2>

      <div style={{ marginTop: "16px" }}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
        />
      </div>

      {preview && (
        <div style={{ marginTop: "16px" }}>
          <img
            src={preview}
            alt="Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "400px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          <div style={{ marginTop: "8px" }}>
            <p>File: {file?.name}</p>
            <p>Size: {file ? (file.size / 1024).toFixed(2) : 0} KB</p>
          </div>
        </div>
      )}

      {file && (
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: "8px 16px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: saving ? "not-allowed" : "pointer",
            }}
          >
            {saving ? "Saving..." : "Save Image"}
          </button>
          <button
            onClick={handleConvertToBase64}
            disabled={saving}
            style={{
              padding: "8px 16px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: saving ? "not-allowed" : "pointer",
            }}
          >
            Convert to Base64
          </button>
          <button
            onClick={handleClear}
            disabled={saving}
            style={{
              padding: "8px 16px",
              backgroundColor: "#f5f5f5",
              color: "#333",
              border: "1px solid #ddd",
              borderRadius: "4px",
              cursor: saving ? "not-allowed" : "pointer",
            }}
          >
            Clear
          </button>
        </div>
      )}

      {base64 && (
        <div style={{ marginTop: "16px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Base64 String:
          </label>
          <textarea
            value={base64}
            readOnly
            style={{
              width: "100%",
              minHeight: "200px",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontFamily: "monospace",
              fontSize: "12px",
              resize: "vertical",
            }}
          />
        </div>
      )}

      {message && (
        <div
          style={{
            marginTop: "16px",
            padding: "8px",
            backgroundColor: message.includes("Error") ? "#fee" : "#efe",
            color: message.includes("Error") ? "#c00" : "#060",
            borderRadius: "4px",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};
