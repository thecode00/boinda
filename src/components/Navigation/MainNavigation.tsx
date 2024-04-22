import React from "react";
import { Link } from "react-router-dom";

function MainNavigation() {
  // TODO: 부트스트랩 스타일 적용
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
