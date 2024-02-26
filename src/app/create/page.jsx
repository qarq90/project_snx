"use client"

import {CreatePageContainer} from "@/styles/styledGlobal";
import {BlockIcon, CardGrid, CardGridHeader, StyledBlock} from "@/styles/styledCreate";
import {Spacer} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {CreateOptions} from "@/lib/objCreate";
import {useEffect, useState} from "react";
import useAppStore from "@/states/appState";
import useStore from "@/states/modelState";
import useDecalStore from "@/states/decalState";

export default function Page() {
    const router = useRouter()
    const [models, setModels] = useState([])
    const [loading, setLoading] = useState(true)
    const arr = [0, 1, 2, 3]
    const {user, setSaved} = useAppStore()
    const {reset} = useStore()
    const {setDecalsData} = useDecalStore()

    const fetchModels = async () => {
        const res = await fetch('/api/get/recent-models?user=' + localStorage.getItem('user'))
        const data = await res.json()
        if (data.models)
            setModels(data.models)
        console.log("DATA.MODELS", typeof data.models, data.models)
    }


    useEffect(() => {
        reset()
        setSaved({state: true, isUnSaved: true, name: '', desc: ''})
        setDecalsData([])
        fetchModels().then(() => setLoading(false))
    }, [user]);

    const openModel = (model) => {
        if (!model) return
        router.push(`/create/recent/${model.modelType}/${model._id}`)
    }

    return (
        <CreatePageContainer>
            <CardGrid>
                <CardGridHeader>
                    NEW
                </CardGridHeader>
                {
                    CreateOptions.map((item, index) => (
                        <StyledBlock
                            key={index}
                            id={item.id}
                        >
                            <BlockIcon
                                href={item.path}
                            >
                                {item.icon}
                            </BlockIcon>
                        </StyledBlock>
                    ))
                }
            </CardGrid>
            <Spacer x={20}/>
            <CardGrid
                id="recents"
            >
                <CardGridHeader>
                    RECENT
                </CardGridHeader>
                {
                    arr.map((idx) => (
                        <StyledBlock
                            key={idx}
                            onClick={() => openModel(models[idx])}
                        >
                            <img
                                className={!models[idx] ? "inactive" : ""}
                                src={models[idx]?.snapshot || '/images/cube.svg'}
                                alt={models[idx]?.name}
                            />
                        </StyledBlock>
                    ))
                }
            </CardGrid>
        </CreatePageContainer>
    );
}