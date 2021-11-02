import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Product-filter.css';

export function ProductFilter(props) {

    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [thcLevel, setThcLevel] = useState('');
    const [cbdLevel, setCbdLevel] = useState('');

    const handleChange = (event) => {
        console.log(event);
        // switch(stateNumber){
        //     case(1): setCategory(event.target.value); break;
        //     case(2): setPrice(event.target.value); break;
        //     case(3): setThcLevel(event.target.value); break;
        //     case(4): setCbdLevel(event.target.value); break;
        //     default: setCategory(event.target.value); break;
        // }
    };

    const dropdownStyle = {
        color: 'white',
        border: "1px solid white!important",
        borderRadius: "5%",
        backgroundColor: 'white!important',
    }


    return (
        <Row id="product-filter">
            <Col md={3} >
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Product category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={handleChange}
                            MenuProps={{ classes: { paper: dropdownStyle } }}
                        >
                            <MenuItem value={10}>Smoking</MenuItem>
                            <MenuItem value={20}>Drinks</MenuItem>
                            <MenuItem value={30}>Food</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Col>
            <Col md={3} >
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Price</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={price}
                            label="Price"
                            onChange={handleChange}
                            MenuProps={{ classes: { paper: dropdownStyle } }}
                        >
                            <MenuItem value={10}>{'<10€/g'}</MenuItem>
                            <MenuItem value={20}>{'>10€/g & <20€/g '}</MenuItem>
                            <MenuItem value={30}>{'>20€/g'}</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Col>
            <Col md={3} >
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">THC level</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={thcLevel}
                            label="THC Level"
                            onChange={handleChange}
                            MenuProps={{ classes: { paper: dropdownStyle } }}
                        >
                            <MenuItem value={10}>{'<1%'}</MenuItem>
                            <MenuItem value={20}>{'>5% & <10%'}</MenuItem>
                            <MenuItem value={30}>{'>10%'}</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Col>
            <Col md={3} >
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">CBD Level</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={cbdLevel}
                            label="CBD Level"
                            onChange={handleChange}
                            MenuProps={{ classes: { paper: dropdownStyle } }}
                        >
                            <MenuItem value={10}>{'<5%'}</MenuItem>
                            <MenuItem value={20}>{'>5% & <10%'}</MenuItem>
                            <MenuItem value={30}>{'>10%'}</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Col>
        </Row>
    );
}