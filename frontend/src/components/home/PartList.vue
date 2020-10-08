<template>
    <div class="part-list">
       <div class="part-register">
                        
    </div>
        <b-form>
            <input id="part-id" type="hidden" v-model="part.id" />
            <b-row>
                <b-col md="3" sm="12">
                    <b-form-group label="Nome:" label-for="part-name">
                        <b-form-input id="part-name" type="text"
                            v-model="part.nome"
                             readonly/>
                    </b-form-group>
                </b-col>
                <b-col md="3" sm="12">
                    <b-form-group label="Veículo:" label-for="part-vehicle">
                        <b-form-input id="part-vehicle" type="text"
                            v-model="part.veiculo"                             
                            readonly/>
                    </b-form-group>
                </b-col>            
            
                <b-col md="3" sm="12">
                    <b-form-group label="Peso Líquido:" label-for="part-net-weight">
                        <b-form-input id="part-net-weight" type="text"
                            v-model="part.pesoliquido"
                            readonly/>
                    </b-form-group>
                </b-col>                <b-col md="3" sm="12">
                    <b-form-group label="Peso Bruto:" label-for="part-gross-weight">
                        <b-form-input id="part-gross-weight" type="text"
                            v-model="part.pesobruto" 
                             readonly/>
                    </b-form-group>
                </b-col>
            </b-row>             
            
            <b-row>
                <b-col xs="12">
                    <b-button variant="danger" 
                        @click="remove">Excluir</b-button>                   
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
        
        <b-table hover striped :items="parts" :fields="fields">
            <template slot="actions" slot-scope="data">
                
                <b-button variant="danger" @click="loadPart(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
                
            </template>
        </b-table>
        
    </div>
</template>

<script>
import { baseApiUrl,showError} from '@/global'
import axios from 'axios'

export default {
    name: 'PartList',
    data: function() {
        return {
            mode: 'save',
            part: {},
            parts: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'nome', label: 'Nome', sortable: true },
                { key: 'veiculo', label: 'Veículo', sortable: true },
                { key: 'pesoliquido', label: 'Peso Líquido', sortable: true },
                { key: 'pesobruto', label: 'Peso Bruto', sortable: true },               
                { key: 'actions', label: 'Ações' }
            ]
        }
    },
    methods: {
        loadParts() {
            const url = `${baseApiUrl}/parts`
            axios.get(url).then(res => {
                this.parts = res.data /// aqui precisa do this (JS), no template sem                
            })
        },

        reset() {
            //this.mode = 'save'
            this.part = {}
            this.loadParts() // atualizar a peça cadastrada na tabela
        },

        loadPart(part) {
            //this.mode = mode
            this.part = { ...part }
        },

        remove() {
            const id = this.part.id // aqui passa obrigatoriamente o id para remover
            axios.delete(`${baseApiUrl}/parts/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        }   
    },

    mounted() {
        this.loadParts()
    }

}
</script>

<style>

</style>