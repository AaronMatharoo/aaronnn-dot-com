export const SkillPill = ({ text }: { text: string | string[] }) => {
    return (
      <>
        <div className="bg-[#5d00d7] w-min h-min rounded-md px-2 text-white  whitespace-nowrap font-light mr-2 my-1">
          {text}
        </div>
      </>
    );
  };

  export default SkillPill