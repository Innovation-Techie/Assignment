<template>
  <body>
    <div id="app">
      <div style="max-width: 50%; margin: auto; margin-top: 5%">
        <multiselect
          v-model="value"
          :options="options"
          :searchable="true"
          :close-on-select="false"
          :show-labels="false"
          placeholder="SELECT COLUMN TO SEE DATA"
          :multiple="true"
          :taggable="true"
          @tag="addTag"
          tag-placeholder="Add this as new tag"
        ></multiselect>
      </div>
      <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config"> </vue-bootstrap4-table>
    </div>
  </body>
</template>

<script>
import VueBootstrap4Table from 'vue-bootstrap4-table';

export default {
  name: 'App',
  data: function () {
    return {
      value: '',
      options: [
        'ID',
        'ADDRESS',
        'FIRST NAME',
        'LAST NAME',
        'PHONE',
        'EMAIL',
        'CITY',
        'STATE',
        'ZIP',
        'COUNTRY',
        'COMPANY',
        'FAX',
        'WEBSITE',
        'DATE',
        'TIME',
      ],
      rows: [
        {
          id: 1,
          name: {
            first_name: 'Vladimir',
            last_name: 'Nitzsche',
          },
          address: {
            country: 'Mayotte',
          },
          city: 'New York',
          email: 'franecki.anastasia@gmail.com',
          phone: '888555-4444',
        },
        {
          id: 2,
          name: {
            first_name: 'Irwin',
            last_name: 'Bayer',
          },
          age: 23,
          address: {
            country: 'Guernsey',
          },
          city: 'New York',
          email: 'rlittle@macejkovic.biz',

          phone: '888555-4444',
        },
        {
          id: 3,
          name: {
            first_name: 'Don',
            last_name: 'Herman',
          },
          address: {
            country: 'Papua New Guinea',
          },
          city: 'New York',
          email: 'delia.becker@cormier.com',
          phone: '888555-4444',
        },
      ],
      columns: [
        {
          label: 'id',
          name: 'id',
          filter: {
            type: 'simple',
            placeholder: 'id',
          },
          sort: true,
        },
        {
          label: 'First Name',
          name: 'name.first_name',
          filter: {
            type: 'simple',
            placeholder: 'Enter first name',
          },
          sort: true,
        },
        {
          label: 'Email',
          name: 'email',
          sort: true,
        },
        {
          label: 'Country',
          name: 'address.country',
          filter: {
            type: 'simple',
            placeholder: 'Enter country',
          },
        },
        {
          label: 'City',
          name: 'city',
          filter: {
            type: 'simple',
            placeholder: 'Enter City',
          },
        },
        {
          label: 'PHONE',
          name: 'phone',
          sort: true,
        },
      ],
      config: {
        checkbox_rows: true,
        rows_selectable: true,
      },
    };
  },
  components: {
    VueBootstrap4Table,
  },
};
</script>
