<script>
import { Table, TableColumn } from "element-ui";
import formatDate from "~/helpers/formatDate";
import { BaseNav, Modal } from '@/components';
import Status from '../../components/Status.vue';



export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    BaseNav,
    Modal,
    Status
},
  head() {
    return {
      title: `${this.title}`,
    };
  },
  data() {
    return {
      title: "Admin page",
      fields: [
        {
          key: "identityNo",
          label: "Название",
        },
        {
          key: "identityNo",
          label: "Последнее изменение:",
        },
        {
          key: "identityNo",
          label: "Статус",
        },
      ],
      tableData: [
        {
          name: "Прибытие на станцию",
          taskId: 1,
          time: new Date(),
          status: "success",
          taskCategory: "aaaa",
        },
        {
          name: "Прибытие на станцию",
          taskId: 1,
          time: new Date(),
          status: "pending",
          taskCategory: "aaaa",
        },
        {
          name: "Прибытие на станцию",
          taskId: 1,
          time: new Date(),
          status: "future",
          taskCategory: "aaaa",
        },
      ],
      selectedIndex: 0,
      showModal: false,
      list: [
        {
          routeId: 1,
          departureStation: "Астана",
          destinationStation: "Алматы",
          departureTime: new Date("06/30/2019").getTime(),
          driverName: "Даниял Серик",
        },
        {
          routeId: 2,
          departureStation: "Астана",
          destinationStation: "Шымкент",
          departureTime: new Date("06/30/2019").getTime(),
          driverName: "Даниял Серик",
        },
        {
          routeId: 3,
          departureStation: "Астана",
          destinationStation: "Актау",
          departureTime: new Date("06/30/2019").getTime(),
          driverName: "Даниял Серик",
        },
      ],
    };
  },
  computed: {
    selectedId() {
      if (this.list) {
        return this.list[this.selectedIndex].routeId;
      }
      return 0;
    },
    currentDate(){
        let date = new Date();
        console.log(date);
        console.log(formatDate(date));
        return date.getHours()
    }
  },
  methods:{
    formatDate(data){
        if(data){
        return formatDate(data);

        }
    }
  },
};
</script>

<template>
  <div class="row mr-1">
    <div class="col-4 px-2">
      <div class="card p-3">
        <div class="card-body ">
          <div class="row">
            <div class="mt-4 ml-3">
              <div class="media">
                <div
                  class="card custom-card grey-card  p-1"
                  style="background-color: #D9D9D9;"
                >
                  <div
                    class="card-body d-flex justify-content-center align-self-center"
                  >
                    <i class="tim-icons icon-single-02"></i>
                  </div>
                </div>
                <div class="media-body">
                  <p class="ml-2 mb-1 h4">Адильхан</p>
                  <p class="ml-2">Менеджер</p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <p>Список маршрутов</p>
            </div>
            <div class="col-12">
              <ul class="nav nav-pills flex-column">
                <li
                  class="nav-item my-2"
                  v-for="(route, index) in list"
                  @click="selectedIndex = index"
                >
                  <a
                    class="nav-link"
                    :class="{ active: selectedId == route.routeId }"
                    aria-current="page"
                    href="#"
                    ><p class="mt-2">
                      {{
                        route.departureStation +
                          " - " +
                          route.destinationStation
                      }}
                    </p>
                    <p>Исполнитель: {{ route.driverName }}</p></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-8 px-4">
      <div class="row">
        <div class="col-12 mt-4 mb-3">
          <p>Панель Управления</p>
        </div>
        <div class="col-4 px-2">
          <div class="card custom-card active">
            <div class="card-body m-2">
              <i class="tim-icons icon-bullet-list-67"></i>
              <p>Список задач</p>
            </div>
          </div>
        </div>
        <div class="col-4 px-2">
          <div class="card custom-card">
            <div class="card-body m-2">
              <i class="tim-icons icon-map-big"></i>
              <p>Местоположение</p>
            </div>
          </div>
        </div>
        <div class="col-4 px-2">
          <div class="card custom-card">
            <div class="card-body m-2">
              <i class="tim-icons icon-notes"></i>
              <p>О маршруте</p>
            </div>
          </div>
        </div>
        <div class="col-12 px-2">
          <div class="card p-4">
            <div class="row">
              <div class="col-8">
                <p>Список задач</p>
                <p>
                  Маршрут:
                  {{
                    list[selectedIndex].departureStation +
                      " - " +
                      list[selectedIndex].destinationStation
                  }}
                </p>
              </div>
              <div class="col-4">
                <p>Время:</p>
                <p>20:42:21</p>
              </div>
              <!-- <div class="col-12">
                <hr />
              </div> -->
              <div class="col-12">
                <hr />
                <div class="row">
                  <div class="col-4 text-center">
                    <p>Название</p>
                  </div>
                  <div class="col-4 text-center">
                    <p>Последнее изменение</p>
                  </div>
                  <div class="col-4 text-center">
                    <p>Статус</p>
                  </div>
                </div>
                <hr />
                <div class="row" v-for="item in tableData" data-target="#exampleModal" @click="showModal = !showModal">
                  <div class="col-4 text-center">
                    <p>{{ item.name }}</p>
                    <p>{{ item.taskId }}</p>
                  </div>
                  <div class="col-4 text-center">
                    <p>{{item.time }}</p>
                  </div>
                  <div class="col-4 text-center">
                    <p><Status :status="item.status"/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" tabindex="-1" role="dialog" id="exampleModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <modal id="modal-1" title="BootstrapVue" :show.sync="showModal">
    <p class="my-4">Hello from modal!</p>
  </modal>
  </div>
</template>

<style></style>
