import React from 'react';

//css and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';


const Nav = () => {
   return (
      <StNav>
         {logo}
      </StNav>
   )
}


const StNav=styled(motion.div)`

`;
export default Nav;
