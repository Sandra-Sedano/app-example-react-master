import { useEffect, useState } from "react";
import { Agenda } from "../../components/Agenda";
import { AgendaDetalhe } from "../../components/AgendaDetalhe";
import { getContacts } from "../../services/api"
import {dados} from '../../components/types'
import { BaseLayout } from "../../layout/BaseLayout";
import { CircularProgress } from "@mui/material";

export function Contacts() {
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [contacts, setContacts] = useState<dados[]>([])

    useEffect(() => {
        async function listContacts() {
            setIsLoading(true)
            setContacts(await getContacts())
            setIsLoading(false)
        }
        (listContacts())
    }, []) //array 

    return (

        <BaseLayout appBarTitle="Agenda de Contatos">
            {isLoading ? (
                <CircularProgress />) : (
                    <Agenda>
                        {
                            contacts.map(dados => {
                                return <AgendaDetalhe contactData={dados}/>
                            })
                        }
                    </Agenda>
            )

            }
        </BaseLayout>



       
    )
}