import { useEffect, useState } from "react";
import { Agenda } from "../../components/Agenda";
import { AgendaDetalhe } from "../../components/AgendaDetalhe";
import { Title } from "../../components/Title";
import { getContacts } from "../../services/api"
import {dados} from '../../components/types'

/*
type contact = {
    name: {
        first: string,
        last: string,
    },
    email: string,
    pictture: {
        medium: string
    }

}*/

export function Contacts() {
    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState<dados[]>([])

    useEffect(() => {

        async function listContacts() {
            setContacts(await getContacts())
        }
        (listContacts())
    }, []) //array 

    return (
        <>
            <header>
                <main>
                    <Title text="Agenda de contatos" />
                    <input type="search" className="inputSearch" />

                    <Agenda>
                        {
                            contacts.map(dados => {
                                return <AgendaDetalhe contactData={dados}/>
                            })
                        }
                    </Agenda>

                </main>
            </header>


        </>
    )
}