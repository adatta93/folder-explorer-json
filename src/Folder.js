import { useState } from "react";

export default function Folder({ explorer }) {
  const [isExpand, setExpand] = useState(false);

  const getFileIcon = () => {
    let fileType = explorer.name.split(".")[1];
    return fileType;
  };

  return (
    <>
      {explorer.isFolder ? (
        <>
          <div className="folder" onClick={() => setExpand(!isExpand)}>
            {explorer.name}
          </div>
          {isExpand &&
            explorer.items &&
            explorer.items.map((exp) => (
              <div key={exp.name} style={{ paddingLeft: "15px" }}>
                <Folder explorer={exp} />
              </div>
            ))}
        </>
      ) : (
        <div className="file">
          <span className={getFileIcon()}></span>
          {explorer.name}
        </div>
      )}
    </>
  );
}
