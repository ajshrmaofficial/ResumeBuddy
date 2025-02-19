export default function ResumePreviewPane() {
  return (
    <div className="overflow-y-auto">
      <h3>Resume Pane</h3>
      <Resume />
    </div>
  );
}

function Resume() {
  return (
    <div className="border border-black w-[210mm] h-[297mm] bg-white shadow-lg p-[20mm]"></div>
  );
}
