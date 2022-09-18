<script>
import { Table, TableColumn } from "element-ui";
import formatDate from "~/helpers/formatDate";
import { BaseNav, Modal } from "@/components";
import Status from "../../components/Status.vue";

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    BaseNav,
    Modal,
    Status,
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
      selectedTask: {
        name: "Прибытие на станцию",
        taskId: 1,
        time: new Date(),
        status: "future",
        taskCategory: "aaaa",
        done: true,
      },
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
    currentDate() {
      let date = new Date();
      console.log(date);
      console.log(formatDate(date));
      return date.getHours();
    },
  },
  methods: {
    formatDate(data) {
      if (data) {
        return formatDate(data);
      }
    },
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
                    ><p
                      class="mt-2"
                      :style="
                        selectedId == route.routeId ? 'color: #ffffff;' : ''
                      "
                    >
                      {{
                        route.departureStation +
                          " - " +
                          route.destinationStation
                      }}
                    </p>
                    <p
                      :style="
                        selectedId == route.routeId ? 'color: #ffffff;' : ''
                      "
                    >
                      Исполнитель: {{ route.driverName }}
                    </p></a
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
          <div
            class="card custom-card active"
            style="background-color: #368BFF; color: #ffffff;"
          >
            <div class="card-body m-2">
              <i class="tim-icons icon-bullet-list-67"></i>
              <p style="color: #ffffff;">Список задач</p>
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
                <div
                  class="row"
                  v-for="item in tableData"
                  data-target="#exampleModal"
                  @click="showModal = !showModal"
                >
                  <div class="col-4 text-center">
                    <p>{{ item.name }}</p>
                    <p>{{ item.taskId }}</p>
                  </div>
                  <div class="col-4 text-center">
                    <p>{{ item.time }}</p>
                  </div>
                  <div class="col-4 text-center">
                    <p><Status :status="item.status" /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal
      id="modal-2"
      title=""
      :show.sync="showModal"
      :centered="true"
      :show-close="true"
    >
      <p class="my-3 h4">{{ selectedTask.name }}</p>
      <div class="row">
        <div class="col-12 mb-2">
          <p>Дата и Время прибытия *</p>
        </div>
        <div class="col-4">
          <date-picker
            placeholder="17 September, 2022"
            format="MM/dd/yyyy"
            v-model="selectedTask.date"
            :disabled="true"

          />
        </div>
        <div class="col-8 pl-4">
          <base-input
            type="text"
            placeholder="19:53"
            v-model="selectedTask.hour"
            disabled
          >
          </base-input>
        </div>
        <div class="col-12 mb-2">
          <p>Проход медосведетельства *</p>
        </div>
        <div class="col-12 mb-2">
          <input :id="cbId" type="checkbox" v-model="selectedTask.done" disabled/>
        </div>
        <div class="col-12 mb-2">
          <p>Прием локомотива *</p>
        </div>
        <div class="col-12 mb-2">
          <p>Дата и время приема локомотива *</p>
        </div>
        <div class="col-4">
          <date-picker
            placeholder="17 September, 2022"
            format="MM/dd/yyyy"
            v-model="selectedTask.date"
            :disabled="true"
          />
        </div>
        <div class="col-8 pl-4">
          <base-input
            type="text"
            placeholder="19:53"
            v-model="selectedTask.hour"
            disabled
            
          >
          </base-input>
        </div>
        <div class="col-12 mb-2">
          <p>Дата и время отбытия от станции *</p>
        </div>
        <div class="col-4">
          <date-picker
            placeholder="17 September, 2022"
            format="MM/dd/yyyy"
            v-model="selectedTask.date"
            :disabled="true"
          />
        </div>
        <div class="col-8 pl-4">
          <base-input
            type="text"
            placeholder="19:53"
            v-model="selectedTask.hour"
            disabled
          >
          </base-input>
        </div>
        <div class="col-12 mb-2">
          <p>Комментарии машиниста *</p>
        </div>
        <div class="col-md-12">
          <base-input>
            <textarea
              class="form-control"
              rows="3"
              placeholder="Локомотив исправен, все детали на месте, датчики показывают правильные 
данные. Есть маленькая неполадка в грузовом отсеке, но не критичная."
              v-model="selectedTask.comments"
              disabled
            >
            </textarea>
          </base-input>
        </div>
        <br />
        <br />
      </div>
    </modal>
  </div>
</template>

<style>
.input {
}
.vdp-datepicker * {
  /* border-radius: 0.4285rem !important; */
  /* border: 1px solid #cad1d7; */
  /* box-shadow: none; */
  /* border-color: rgba(29, 37, 59, 0.5); */
}
</style>
