import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import './style.css'
//import { Button } from "../../components/Button";
import { dados } from '../types';
// import { Button } from '@mui/material';

type contactProps = {
    contactData: dados // VAI PUXAR DA PASTA TYPES
}

export function AgendaDetalhe({ contactData }: contactProps) {

    const { name, email, picture } = contactData

    return (
        <>

            <ListItem>
                <ListItemAvatar>
                    <Avatar src={picture.medium} />
                </ListItemAvatar>

                <ListItemText primary={<Typography>{name.first}</Typography>} secondary={
                    <Typography>{email}</Typography>
                }>
                </ListItemText>
            </ListItem>
            <Divider />

            {/*
            <section className='Dados'>
                <img src={picture.medium} alt="" />
                <div className='dadosContato'>
                    <p>{name.first}</p>
                    <p>{email}</p>

                    <Button variant="contained" component="label">
                        DETALHE
                    </Button>
                    {/<Button text='Detalhe' type='primary' />/}
                </div>
            </section>
            */}


            {/*
                <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="" />
                <div className='dadosContato'>

                    <p>Nome</p>
                    <p>Email</p>
                    <Button text='Detalhe' type='primary' />

                </div>
            */}
        </>
    )
}