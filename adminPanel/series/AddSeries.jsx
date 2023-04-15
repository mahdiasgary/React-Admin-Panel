import CreatableSelect from "react-select/creatable";

const AddSeries = () => {
  const options = [
    { value: "jack", label: "Jack", color: "#FF8B00" },
    { value: "john", label: "John", color: "#36B37E" },
    { value: "mike", label: "Mike", color: "#0052CC" },
  ];
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "zink" }),
    option: (
      styles,
      { data, isDisabled, isFocused, isSelected, isHovered }
    ) => {
      return {
        ...styles,
        color: data.color,
        backgroundColor: "red",
        "&:hover": {
          ...styles, backgroundColor: "blue",
        },
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "red",
        color: "zink",
        backgroundColorOpacity: "40%",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };
  const handleChange = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };
  return (
    <CreatableSelect
      options={options}
      onChange={handleChange}
      isMulti
      styles={colorStyles}
    />
  );
};

export default AddSeries;
 