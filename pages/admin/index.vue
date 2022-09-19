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
      url: "http://localhost:8081",
      controlPanelState: 0,
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
      routeDetails: {
        driverName: "",
        departureName: "",
        destinationName: "",
        departureTime: "2022-09-19T07:35:07.014Z",
        destinationTime: "2022-09-19T07:35:07.014Z",
        stopsCount: 0,
      },
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
          routeId: 9,
          departureStation: "Астана",
          destinationStation: "Алматы",
          departureTime: new Date("06/30/2019").getTime(),
          driverName: "Даниял Серик",
        },
        {
          routeId: 10,
          departureStation: "Астана",
          destinationStation: "Шымкент",
          departureTime: new Date("06/30/2019").getTime(),
          driverName: "Даниял Серик",
        },
        {
          routeId: 311,
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

  async mounted() {
    let response;
    try {
      response = await this.$axios.get(`${this.url}/manager/user/1`);
    } catch (error) {
      console.log(error);
    }
    if (response && response.data && response.data.length) {
      // this.list = response.data.concat(this.list);
      console.log(response.data);
      this.list = response.data;
      this.getDetail(this.list[0].taskId, 0)
      // let data;
      // try {
      //   data = await this.$axios.get(
      //     `${this.url}/manager/route/${response.data[0].routeId}`
      //   );
      // } catch (error) {
      //   console.log(error);
      // }
      // if (data && data.data && data.data.length) {
      //   this.tableData = data.data;
      // }
    }
  },

  methods: {
    formatDate(data) {
      if (data) {
        return formatDate(data);
      }
    },
    async getRoute(id) {
      try {
        const response = await this.$axios.get(
          `${this.url}/manager/route/${id}`
        );
        return response;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    async getRouteDetail(id) {
      try {
        const response = await this.$axios.get(
          `${this.url}/manager/route-details/${id}`
        );
        return response;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    async getStationData(id) {
      try {
        const response = await this.$axios.get(
          `${this.url}/manager/station-data/${id}`
        );
        return response;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    async getLocoSubmission(id) {
      try {
        const response = await this.$axios.get(
          `${this.url}/manager/loco-submission/${id}`
        );
        return response;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    async getLocoAcceptance(id) {
      try {
        const response = await this.$axios.get(
          `${this.url}/manager/loco-acceptance/${id}`
        );
        return response;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    async getRouteSubtask(id) {
      try {
        const response = await this.$axios.get(
          `${this.url}/manager/route-subtask/${id}`
        );
        return response;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    async getDetail(id, index) {
      const routes = await this.getRoute(id);
      const routeDetails = await this.getRouteDetail(id);

      this.selectedIndex = index;

      if (routeDetails && routeDetails.data) {
        this.routeDetails = routeDetails.data;
      }
      if (routes && routes.data && routes.data.length) {
        console.log(routes.data, "Detail");
        this.tableData = routes.data;
      } else {
        this.tableData = [
          {
            name: "Прибытие на станцию",
            taskId: 10520234,
            time: new Date(),
            status: "success",
            taskCategory: "aaaa",
          },
          {
            name: "Выезд из станции",
            taskId: 10520234,
            time: new Date(),
            status: "success",
            taskCategory: "aaaa",
          },
          {
            name: "Прибытие в депо 1",
            taskId: 10520234,
            time: new Date(),
            status: "success",
            taskCategory: "aaaa",
          },
          {
            name: "Прибытие в депо 2",
            taskId: 10520234,
            time: new Date(),
            status: "pending",
            taskCategory: "aaaa",
          },
          {
            name: "Прибытие на станцию назначения",
            taskId: 10520234,
            time: new Date(),
            status: "future",
            taskCategory: "aaaa",
          },
          {
            name: "Сдача локомотива",
            taskId: 10520234,
            time: new Date(),
            status: "future",
            taskCategory: "aaaa",
          },
          {
            name: "Завершение работы",
            taskId: 10520234,
            time: new Date(),
            status: "future",
            taskCategory: "aaaa",
          },
        ];
      }
    },
  },
};
</script>

<template>
  <div class="row mr-1">
    <div class="col-4 px-2">
      <div class="card p-3">
        <div class="card-body">
          <div class="row">
            <div class="mt-4 ml-3">
              <div class="media">
                <div
                  class="card custom-card grey-card p-1"
                  style="background-color: #d9d9d9"
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
            <div class="col-12 row">
              <div class="col-7">
                <p class="h3 mb-2">Список маршрутов</p>
              </div>
              <div class="col-5 px-0">
                <div class="btn btn-info px-3">Добавить маршрут</div>
              </div>
            </div>
            <div class="col-12">
              <ul class="nav nav-pills flex-column">
                <li
                  class="nav-item my-2"
                  v-for="(route, index) in list"
                  @click="getDetail(route.routeId, index)"
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
            class="card custom-card"
            :style="
              controlPanelState == 0
                ? 'background-color: #368bff; color: #ffffff'
                : ''
            "
            @click="controlPanelState = 0"
          >
            <div class="card-body m-2">
              <i class="tim-icons icon-bullet-list-67"></i>
              <p style="">Список задач</p>
            </div>
          </div>
        </div>
        <div class="col-4 px-2">
          <div
            class="card custom-card"
            :style="
              controlPanelState == 1
                ? 'background-color: #368bff; color: #ffffff'
                : ''
            "
            @click="controlPanelState = 1"
          >
            <div class="card-body m-2">
              <i class="tim-icons icon-map-big"></i>
              <p>Местоположение</p>
            </div>
          </div>
        </div>
        <div class="col-4 px-2">
          <div
            class="card custom-card"
            :style="
              controlPanelState == 2
                ? 'background-color: #368bff; color: #ffffff'
                : ''
            "
            @click="controlPanelState = 2"
          >
            <div class="card-body m-2">
              <i class="tim-icons icon-notes"></i>
              <p>О маршруте</p>
            </div>
          </div>
        </div>
        <div class="col-12 px-2">
          <div class="card p-4" v-if="controlPanelState == 0">
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
                    <p>ID: {{ item.taskId }}</p>
                  </div>
                  <div class="col-4 text-center">
                    <p>{{ item.time }}</p>
                  </div>
                  <div class="col-4 text-center">
                    <p><Status :status="item.status" /></p>
                  </div>
                  <div class="col-12"><hr /></div>
                </div>
              </div>
            </div>
          </div>
          <div class="card p-4" v-if="controlPanelState == 1"></div>
          <div class="card p-4" v-if="controlPanelState == 2">
            <div class="card-body">
              <p class="h3">Информация о маршруте</p>
              <p class="">
                Маршрут:
                {{
                  routeDetails.departureName +
                  " - " +
                  routeDetails.destinationName
                }}
              </p>
              <hr />
              <p>Машинист: {{ routeDetails.driverName }}</p>
              <hr />
              <p>Пункт отправления: {{ routeDetails.departureName }}</p>
              <hr />
              <p>Пункт прибытия: {{ routeDetails.destinationName }}</p>
              <hr />
              <p>Время отправления: {{ routeDetails.departureTime }}</p>
              <hr />
              <p>
                Ожидаемое время прибытия: {{ routeDetails.destinationTime }}
              </p>
              <hr />
              <p>Колличество остановок: {{ routeDetails.stopsCount }}</p>
              <hr />
              <p>Данные о поезде</p>
              <p>Масса:</p>
              <p>Расход топливо:</p>
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
          <input type="checkbox" v-model="selectedTask.done" disabled />
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

<style></style>
