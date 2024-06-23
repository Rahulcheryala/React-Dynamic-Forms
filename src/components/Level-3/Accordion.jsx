import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useRef,
} from "react";
import { FaChevronDown } from "react-icons/fa";

const AccordionContext = createContext();

const Accordion = ({ children, value, onChange, ...props }) => {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
};

const AccordionItem = ({ children, value, trigger, ...props }) => {
  const { selected, setSelected } = useContext(AccordionContext);
  const isOpen = selected === value;

  const ref = useRef();

  return (
    <li {...props} className="space-y-2">
      <button
        type="button"
        onClick={() => setSelected(isOpen ? null : value)}
        className="flex justify-between items-center w-full p-4 text-left font-medium bg-gray-50 rounded-lg focus:outline-none focus:ring-2"
      >
        {trigger}
        <span>
          <FaChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>
      <div
        className={`overflow-y-hidden transition-all duration-150 ease-in-out ${
          isOpen ? "max-h-fit" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 text-sm font-semibold" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
};

export { Accordion, AccordionItem };
