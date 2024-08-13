import { useState, useEffect } from "react";
import '../App.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TableStation = ({ listUsers, dataTitle, dataSku, dataWeight, dataPrice, deleteData }) => {

  // console.log("Props", listUsers);
  const [boolean, setBoolean] = useState(false)
  const [boolean1, setBoolean1] = useState(false)
  const HanleSwitch = () => {
    setBoolean(!boolean)
  }

  const displayTitle = () => {
    dataTitle()
  }
  const displaySku = () => {
    dataSku()
  }
  const displayWeight = () => {
    dataWeight()
  }
  const displayPrice = () => {
    dataPrice()
  }
  const displayDelete = () => {
    console.log("click deleyte", deleteData);
    setBoolean1(!boolean1)
    deleteData(boolean1)
  }
  return (
    <TableContainer component={Paper} className="mb-[368px]">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell onClick={displayTitle} align="left" className="cursor-pointer">Tittle</StyledTableCell>
            <StyledTableCell onClick={displaySku} align="left" className="cursor-pointer">Sku</StyledTableCell>
            <StyledTableCell onClick={displayWeight} align="left" className="cursor-pointer">Weight</StyledTableCell>
            <StyledTableCell onClick={displayPrice} align="left" className="cursor-pointer">Price</StyledTableCell>
            <StyledTableCell align="left">Enable</StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listUsers && listUsers.map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">{data.id}</StyledTableCell>
              <StyledTableCell align="left">{data.title}</StyledTableCell>
              <StyledTableCell align="left">{data.sku}</StyledTableCell>
              <StyledTableCell align="left">{data.weight}</StyledTableCell>
              <StyledTableCell align="left">{data.price}</StyledTableCell>
              <StyledTableCell align="left" >
                <Switch {...label} defaultChecked size="small" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <span className='text-[#004744] mr-2 cursor-pointer'>VIEW</span>
                <span className='text-[#004744] mr-4 cursor-pointer'>EDIT</span>
                <span onClick={displayDelete} className='text-[#7C7B7B] cursor-pointer'>DELETE</span>
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableStation