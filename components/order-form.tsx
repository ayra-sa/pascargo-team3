import React from "react";

interface InputSectionProps {
  title: string;
  number: string;
  children: React.ReactNode;
}

const InputSection: React.FC<InputSectionProps> = ({ number, title, children }) => (
  <section className='mb-14 flex flex-col gap-5'>
    <h3 className='text-2xl flex gap-2 font-medium'><span className='text-3xl text-[#273C75]'>{number}</span>{title}</h3>
    {children}
  </section>
);

const InputContainer: React.FC<{ head: string, children: React.ReactNode }> = ({ children, head }) => (
  <div className='flex flex-col text-sm w-full'>
    <label className="font-semibold">{head}</label>
    {children}
  </div>
);

const InputField: React.FC<{ type: string, title: string }> = ({ type, title }) => (
  <div className='border p-2 border-[#A2A2A2] bg-white rounded-xl'>
    <input className="outline-none w-full" type={type} placeholder={title} />
  </div>
);

const TextArea: React.FC<{ title: string }> = ({ title }) => (
  <textarea className="outline-none p-2 w-full h-full border rounded-xl border-[#A2A2A2]" placeholder={title}></textarea>
);

const DropContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <select className="outline-none w-full py-2 px-3 border-[#A2A2A2] border rounded-xl">
    {children}
  </select>
);

const DropItem: React.FC<{ option: string }> = ({ option }) => (
  <option value={option} >{option}</option>
);


export { InputSection, InputContainer, InputField, TextArea, DropContainer, DropItem };
