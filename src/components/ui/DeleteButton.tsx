import { useState } from "react";

export default function DeleteButton({
  label,
  onDelete,
  cardId
}: {
  label: string;
  onDelete: (cardId: number) => void;
  cardId: number;
}) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (showConfirm) {
    return (
      <div className="fixed bg-black/80 inset-0 flex items-center h-full justify-center">
        <div className="bg-white p-4 rounded-lg">
          <div>Are you sure you want to delete?</div>
          <div className="flex gap-2 justify-between mt-3">
            <button
              type="button"
              onClick={() => setShowConfirm(false)}
              className="border border-gold  px-2 py-1 rounded-md cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete(cardId);
                setShowConfirm(false);
              }}
              type="button"
              className="primary border border-gold  px-2 py-1 rounded-md cursor-pointer"
            >
              Yes,&nbsp;delete!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button type="button" onClick={() => setShowConfirm(true)}>
      {label}
    </button>
  );
}
