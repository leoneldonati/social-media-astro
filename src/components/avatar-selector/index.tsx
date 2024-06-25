import { useEffect, useState } from "react";
import "./index.css";
import { IconPlus } from "@tabler/icons-react";
export default function AvatarSelector({ avatar }: { avatar?: string }) {
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const file = e.target.files[0];

    const src = URL.createObjectURL(file);

    setSelectedAvatar(src);
  };

  useEffect(() => {
    if (avatar) setSelectedAvatar(avatar);
  }, [avatar]);
  return (
    <label
      htmlFor="avatar"
      className="sign__label--avatar"
      title="Take a picture."
    >
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        id="avatar"
        name="avatar"
        hidden
      />
      {selectedAvatar && (
        <img
          src={selectedAvatar}
          className="sign__label--avatar selected-avatar"
          loading="lazy"
        />
      )}

      {!selectedAvatar && !avatar && (
        <IconPlus style={{ inset: 22, position: "absolute" }} />
      )}
    </label>
  );
}
