import { copy } from '../data/copy';

export default function ListeningStatus({ minutes }) {
  return (
    <div className="flex flex-col items-center gap-xs">
      <p className="text-subhead font-pretendard text-textSecondary">
        {copy.tiring.status}
      </p>
      <p className="text-footnote font-pretendard text-textTertiary">
        {copy.tiring.duration(minutes)}
      </p>
    </div>
  );
}
