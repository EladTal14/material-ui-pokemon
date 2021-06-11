import styled from "styled-components";
import {Badge, Button, ButtonGroup} from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {useState} from "react";

const StyledButton = styled(Button)`
  background-color: blue;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  &:hover {
    background-color: #5469d4;
  }`
const StyledButtonPM = styled(Button)`
  max-width: 45px;
  max-height: 49px;
  &:hover {
    background-color: #5469d4;
  }`
const StyledAcUnitIcon = styled(AcUnitIcon)`
  color: #fff;

  &:hover {
    color: red;
  }`
const StyledBadge = styled(Badge)`
  transform: translate(6px, -3px);
`
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => props.color};
`
export const Play = () => {
    const [count, setCount] = useState(0)
    const [invisible, setInvisible] = useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };
    return (
        <StyledWrapper color="yellow">
            <StyledBadge color="secondary" badgeContent={count} >
                <StyledButton><StyledAcUnitIcon/></StyledButton>
            </StyledBadge>
            <ButtonGroup>
                <StyledButtonPM
                    aria-label="reduce"
                    onClick={() => {
                        setCount(Math.max(count - 1, 0));
                    }}
                >
                    <RemoveIcon fontSize="small"/>
                </StyledButtonPM>
                <StyledButtonPM
                    aria-label="increase"
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    <AddIcon fontSize="small"/>
                </StyledButtonPM>
            </ButtonGroup>
        </StyledWrapper>
    );
};

