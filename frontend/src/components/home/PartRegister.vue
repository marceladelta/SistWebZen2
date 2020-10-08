<template>
    <div class="part-register">
        <b-form>
            <input id="part-id" type="hidden" v-model="part.id" />
            <b-row>
                <b-col md="12" sm="12">
                    <b-form-group label="Nome:" label-for="part-name">
                        <b-form-input id="part-name" type="text"
                            v-model="part.nome" required
                            placeholder="Informe o Nome da peça..." />
                    </b-form-group>
                </b-col>
                <b-col md="12" sm="12">
                    <b-form-group label="Veículo:" label-for="part-vehicle">
                        <b-form-input id="part-vehicle" type="text"
                            v-model="part.veiculo"                             
                            placeholder="Informe o Veículo onde a peça é utilizada..." />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Peso Líquido:" label-for="part-net-weight">
                        <b-form-input id="part-net-weight" type="text"
                            v-model="part.pesoliquido" required
                            placeholder="Informe o Peso Líquido da peça..." />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Peso Bruto:" label-for="part-gross-weight">
                        <b-form-input id="part-gross-weight" type="text"
                            v-model="part.pesobruto" required
                            placeholder="Informe o Peso Bruto da peça..." />
                    </b-form-group>
                </b-col>
            </b-row>             
            
            <b-row>
                <b-col xs="12">
                    <b-button variant="primary" 
                        @click="save">Salvar</b-button>                    
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
                
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'PartRegister',
    data: function() {
        return {
           // mode: 'save',
            part: {},
            parts: [],            
        }
    },
    methods: {

        loadParts() {
            const url = `${baseApiUrl}/parts`
            axios.get(url).then(res => {
                this.parts = res.data /// aqui precisa do this (JS), no template sem                
            })
        },

        /// o método save esta preparado para salvar ou editar
        // como não foi solicitado a alteração, não fará diferença. 
        // mas já deixei preparado para isso       
        save() {
            
            axios.post(`${baseApiUrl}/parts`,this.part)            
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },

        //loadPart(part) {
            //this.mode = mode
            //this.part = { ...part }
        //},    


        reset() {
            //this.mode = 'save'
            this.part = {}
            this.loadParts() // atualizar a peça cadastrada na tabela
        }
        
        
    }
    //mounted() {
        //this.loadParts()
    //}
}
</script>

<style>

</style>
