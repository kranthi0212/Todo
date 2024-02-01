import styled from "styled-components"


const CheckBoxWrapper=styled.input`
    height:20px;
    width:20px;
    display:flex;

`;

const CheckBoxLabel=styled.span`
    padding-left:10px;
    color:white;
    padding-right:10px;
`

export const CheckBox = (props) => {
    const { name, isChecked, isDisabled, onHandleChange, title } = props;
  
    return (
      <>
        <CheckBoxWrapper
          name={name}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          onChange={onHandleChange}
        />
        <CheckBoxLabel>{title}</CheckBoxLabel>
      </>
    );
  };