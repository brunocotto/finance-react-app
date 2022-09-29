import React from "react"
import styled from "styled-components";
import { BiSearch } from "react-icons/bi"


function Navbar() {
  return (
    <Nav>
          <div className="title">
            <h1>Dashboard</h1>
            <h5>Payment updates</h5>
          </div>
          <div className="search">
            <BiSearch />
            <input type="text" placeholder="Search" />
          </div>
    </Nav>
  );
}

export default Navbar;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: black;
  .title {
    h5{
      color: gray;
    }
  }
  .search {
    background-color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1 8rem 1rem 1rem;
    border-radius: 1.5rem;
    svg {
      color: gray;
    }
    input {
      background-color: transparent;
      border: none;
      color: gray;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: gray;
      }
    }
  }
`;