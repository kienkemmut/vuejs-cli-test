<template>
    <div>
        <!--<b-form class="form-login">-->
            <!--<h2>{{ nameLogin }}</h2>-->

            <!--<b-form-group-->
                    <!--id="input-group-1"-->
                    <!--label-for="input-1"-->
                    <!--class="mt-4 px-3"-->
            <!--&gt;-->
                <!--<b-form-input-->
                        <!--id="input-1"-->
                        <!--type="email"-->
                        <!--required-->
                        <!--placeholder="Username"-->
                        <!--class="mb-2"-->
                <!--&gt;</b-form-input>-->

                <!--<b-form-input-->
                        <!--id="input-1"-->
                        <!--type="email"-->
                        <!--required-->
                        <!--placeholder="Password"-->
                        <!--class="mb-4"-->
                <!--&gt;</b-form-input>-->

                <!--<b-button class="btn-login">Login</b-button>-->

            <!--</b-form-group>-->
        <!--</b-form>-->
        <!--<b-row  no-gutters="false">-->
            <!--<b-col sm="3" style="background-color: red">ssss</b-col>-->
            <!--<b-col sm="3" style="background-color: red">ssss</b-col>-->
            <!--<b-col sm="3" style="background-color: red">ssss</b-col>-->
            <!--<b-col sm="3" style="background-color: red">ssss</b-col>-->
        <!--</b-row>-->
        <b-container fluid class="bv-example-row">
            <b-row>
                <b-col md="4">md="4"</b-col>
                <b-col md="4" offset-md="4">md="4" offset-md="4"</b-col>
            </b-row>

            <b-row>
                <b-col md="3">md="3" offset-md="3"</b-col>
                <b-col md="3" offset-md="3">md="3" offset-md="3"</b-col>
            </b-row>

            <b-row>
                <b-col md="6" offset-md="3">md="6" offset-md="3"</b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
  export default {
    data: function () {
      return {
        selected: '',
        nameLogin: 'LOGIN'
      }
    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>
