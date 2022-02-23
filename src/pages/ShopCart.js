import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import tshirt1 from "../images/tshirt1.jpg"
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
const ShopCart = () => {
    return (
        <Card style={{ margin: '8rem', maxHeight: '30rem', padding: '2rem', maxWidth: '50rem', display: 'flex', flexDirection: 'row' }}>
            
            <div style={{flex:'1',display:'flex',alignItems:'center',flexDirection:'column'}}>
            <h5>My Cart</h5>
                <div style={{ display: 'flex',justifyContent:'space-evenly',width:'100%' }}>
                    <div style={{ height: '7rem', width: '7rem' }}>
                        <CardMedia
                            component="img"
                            // height="100"

                            image={tshirt1}
                            alt="tshirt"
                        />
                    </div>
                    <div>
                        <p>Im Product</p>
                        <p>$69</p>

                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <IconButton ><RemoveIcon /></IconButton>

                    <p>5</p>
                    <IconButton ><AddIcon /></IconButton>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span>
<LocalOfferIcon /> Add Promo Code
                    </span>
                    <span>
                        <NoteAddIcon /> Add Note
                    </span>
                </div>
            </div>
            <div style={{flex:'1'}}>
            <h5>Order Summary</h5>
                <div></div>
                <div></div>
            </div>
        </Card>
    )
}

export default ShopCart