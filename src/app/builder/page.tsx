import InputPane from "@/components/inputPane";
import ResumePreviewPane from "@/components/resumePreviewPane";

export default function Builder() {
  return (
    <div className="border-2 border-red-500 flex justify-between [height:calc(100dvh-var(--navbar-height))]">
      <InputPane />
      <ResumePreviewPane />
    </div>
  );
}
