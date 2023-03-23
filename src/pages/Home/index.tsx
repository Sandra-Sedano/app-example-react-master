import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { Menu } from "../../components/Menu";
import { MenuItem } from "../../components/MenuItem";
import { AddressBook, ImageSquare } from "phosphor-react";
import { Link } from "react-router-dom"




export function Home() {
    return (
        <>
            <header>
                <Title text='Bem Vindo' />
            </header>
            <main>
                {/*  <div className="action-buttons">
                    <Button text="Login" type='primary'/>
                    <Button text="Cadastro" type='default' /> 
             </div> */}

                <Menu>
                    <Link to='/Agenda'>
                        <MenuItem icon={<AddressBook />} text="Agenda" />
                    </Link>


                    <Link to='/gallery'>


                        <MenuItem icon={<ImageSquare />} text="Gallery" />
                    </Link>
                   
                </Menu>
            </main>

        </>
    )


}