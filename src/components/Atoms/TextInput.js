import styled from "styled-components";

const TextInput = styled.input`
margin-right: 20px;
margin-top: 30px;
width: 50%;
max-width: 300px;
background-color: transparent;
border: 1.5px solid ${({ theme }) => theme.description};
border-radius: 5px;
color: ${({ theme }) => theme.white};
padding: 10px 20px;
&:focus{
    border: 1.5px solid ${({ theme }) => theme.white};
}
`;

export default TextInput;