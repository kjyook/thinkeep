import { DefaultModalProps } from '../modal.types';

export interface BasicModalProps extends DefaultModalProps {
  title: string;
}

export const BasicModal = ({ visible, close, title = 'test' }: BasicModalProps) => {
  return (
    <div className="w-[28.1rem] h-[20.9rem]">
      <div className="bg-white rounded-2xl p-7 flex flex-row items-center">
        <div className="w-full flex flex-col items-center">
          <header>{title}</header>
          <footer>
            <button className="w-full h-20 font-semibold text-2xl text-gray2 rounded-xl border-none hover:bg-primary">
              okay
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};
