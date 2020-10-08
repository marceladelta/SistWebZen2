<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Peças Vendidas"
            sub="Cadastro e Peças vendidas" />  
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Formulário para Cadastro peças vendidas" active>
                        <PartRegister />
                    </b-tab>
                    <b-tab title="Listagem Geral peças vendidas">
                        <PartList />
                    </b-tab>                    
                </b-tabs>
            </b-card>
        </div>             
    </div>
    
</template>

<script>
import PageTitle from '../template/PageTitle'
import axios from 'axios' /// para fazer a requisição para o backend
import { baseApiUrl } from '@/global' // @ pois esta diretamente no src
import PartRegister from './PartRegister'
import PartList from './PartList'

export default {
    name: 'Home',
    components: { PageTitle,PartRegister,PartList }, // para usar no template
    
   
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
