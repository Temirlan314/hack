<script>
import { Table, TableColumn } from "element-ui";
import { get } from "http";
import Status from "~/components/Status.vue";
import StatusButton from "~/components/StatusButton.vue";

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    Status,
    StatusButton,
  },
  head() {
    return {
      title: `${this.title}`,
    };
  },
  data() {
    return {
      url: "http://localhost:8081",
      selectedTask: {
        name: "Прибытие на станцию",
        taskId: 1,
        time: new Date(),
        status: "future",
        taskCategory: "subtask",
      },
      title: "Driver page",
      selectedIndex: 0,
      selectedTaskCategory: "subtask",
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
      taskData: null,
      tableData: [
        {
          name: "Прибытие на станцию",
          taskId: 1,
          time: new Date(),
          status: "success",
          taskCategory: "subtask",
        },
        {
          name: "Прибытие на станцию",
          taskId: 2,
          time: new Date(),
          status: "pending",
          taskCategory: "LocoAcceptance",
        },
        {
          name: "Прибытие на станцию",
          taskId: 3,
          time: new Date(),
          status: "future",
          taskCategory: "LocoSubmission",
        },
      ],
    };
  },
  computed: {
    selectedId() {
      if (this.tableData) {
        return this.tableData[this.selectedIndex].taskId;
      }
      return 0;
    },
  },
  async mounted() {
    let response;
    try {
      response = await this.$axios.get(`${this.url}/driver/getTasks/1`);
    } catch (error) {
      console.log(error);
    }

    if (response && response.data && response.data.length) {
      this.tableData = response.data;
    }
  },
  methods: {
    send() {
      this.sendDetails(this.selectedTask.taskCategory);
    },
    save() {},
    toDetail(index, id) {
      this.selectedIndex = index;
      this.selectedTaskCategory = this.tableData[index].taskCategory;
      this.getDetail(id);
    },
    async sendDetails(category) {
      if (category == "subtask") {
        await this.$axios.post(
          `${this.url}/driver/saveSubtask`,
          this.selectedTask
        );
      } else if (category == "LocoAcceptance") {
        await this.$axios.post(
          `${this.url}/driver/saveLocoAcceptance`,
          this.selectedTask
        );
      } else if (category == "LocoSubmission") {
        await this.$axios.post(
          `${this.url}/driver/saveLocoSubmission`,
          this.selectedTask
        );
      } else {
        await this.$axios.post(
          `${this.url}/driver/saveStationData`,
          this.selectedTask
        );
      }
    },
    async getDetail(id) {
      let response;
      try {
        if (this.selectedTaskCategory == "subtask") {
          response = await this.$axios.get(
            `${this.url}/driver/getSubtask/${id}`
          );
        } else if (this.selectedTaskCategory == "LocoAcceptance") {
          response = await this.$axios.get(
            `${this.url}/driver/getLocoAcceptance/${id}`
          );
        } else if (this.selectedTaskCategory == "LocoSubmission") {
          response = await this.$axios.get(
            `${this.url}/driver/getLocoSubmission/${id}`
          );
        } else {
          response = await this.$axios.get(
            `${this.url}/driver/getStationData/${id}`
          );
        }
      } catch (error) {
        console.log(error);
      }

      if (response && response.data) {
        this.selectedTask = response.data;
      }
      this.selectedTask.taskCategory = this.selectedTaskCategory

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
                  <p class="ml-2">Машинист</p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <p>Список задач</p>
            </div>
            <div class="col-12">
              <ul class="nav nav-pills flex-column">
                <li
                  class="nav-item my-2"
                  v-for="(item, index) in tableData"
                  @click="toDetail(index, item.taskId)"
                >
                  <a
                    class="nav-link"
                    :class="{ active: selectedIndex == index }"
                    aria-current="page"
                    href="#"
                  >
                    <div class="row">
                      <div class="col-7">
                        <p
                          class="mt-2"
                          :style="
                            selectedId == item.routeId ? 'color: #ffffff;' : ''
                          "
                        >
                          {{ item.name }}
                        </p>
                        <p
                          :style="
                            selectedId == item.routeId ? 'color: #ffffff;' : ''
                          "
                          class="mb-0"
                        >
                          Последнее изменение:
                        </p>

                        <p
                          :style="
                            selectedId == item.routeId ? 'color: #ffffff;' : ''
                          "
                        >
                          {{ item.time.toString().slice(0, 24) }}
                        </p>
                      </div>
                      <div class="col-5">
                        <br />
                        <!-- <Status :status="item.status"/> -->
                        <StatusButton :status="item.status" />
                        <!-- <div class="btn btn-success px-4">Завершен</div> -->
                      </div>
                    </div></a
                  >
                </li>
              </ul>
            </div>
            <!-- <div class="col-12">
                <ul class="nav nav-pills flex-column">
                  <li class="nav-item my-2">
                    <a class="nav-link active" aria-current="page" href="#">
                      <div class="row">
                        <div class="col-7">
                          <p class="mt-2 h4 mb-1">Прибытие на станцию</p>
                          <p class="mb-0">Последнее изменение:</p>
                          <p class="">17 сентября, 2022</p>
                        </div>
                        <div class="col-5">
                          <br />
                          <div class="btn btn-success">
                            Finish
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item my-2">
                    <a class="nav-link" aria-current="page" href="#"
                      ><p class="mt-2">Astana - Shymkent</p>
                      <p>Исполнитель: Даниял Серик</p></a
                    >
                  </li>
                  <li class="nav-item my-2">
                    <a class="nav-link" aria-current="page" href="#"
                      ><p class="mt-2">Astana - Aktau</p>
                      <p>Исполнитель: Даниял Серик</p></a
                    >
                  </li>
                  <li class="nav-item my-2">
                    <a class="nav-link" aria-current="page" href="#"
                      ><p class="mt-2">Astana - Semei</p>
                      <p>Исполнитель: Даниял Серик</p></a
                    >
                  </li>
                </ul>
              </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="col-8 px-4">
      <div class="row">
        <div class="col-12 mt-4 mb-3">
          <p>Панель Управления Задачей</p>
        </div>
        <div class="col-12 px-2">
          <div
            class="card custom-card p-4"
            v-if="selectedTask.taskCategory == 'subtask'"
          >
            <div class="card-body">
              <p class="my-3 h4">{{ selectedTask.name }}</p>
              <div class="row">
                <div class="col-12 mb-2">
                  <p>Дата и Время прибытия *</p>
                </div>
                <div class="col-4">
                  <date-picker
                    placeholder="17 September, 2022"
                    format="MM/dd/yyyy"
                    v-model="selectedTask.time"
                  />
                </div>
                <div class="col-8 pl-4">
                  <base-input
                    type="text"
                    placeholder="19:53"
                    v-model="selectedTask.hour"
                  >
                  </base-input>
                </div>
                <div class="col-12 mb-2">
                  <p>Проход медосведетельства *</p>
                </div>
                <div class="col-12 mb-2">
                  <input type="checkbox" v-model="selectedTask.done" />
                </div>
                <br />
                <br />
              </div>

              <br /><br /><br />
              <div class="col-3 btn btn-info" @click="send()">
                Отправить данные
              </div>
              <div class="col-2 btn btn-secondary px-0" @click="save()">
                Сохранить
              </div>
            </div>
          </div>
          <div
            class="card custom-card p-4"
            v-if="selectedTask.taskCategory == 'LocoAcceptance'"
          >
            <div class="card-body">
              <div class="row">
                <p class="my-3 h4">{{ selectedTask.name }}</p>
                <div class="col-12 mb-2">
                  <p>Дата и Время прибытия *</p>
                </div>
                <div class="col-4">
                  <date-picker
                    placeholder="17 September, 2022"
                    format="MM/dd/yyyy"
                    v-model="selectedTask.time"
                  />
                </div>
                <div class="col-8 pl-4">
                  <base-input
                    type="text"
                    placeholder="19:53"
                    v-model="selectedTask.hour"
                  >
                  </base-input>
                </div>
                <div class="col-12 mb-2">
                  <p>Cчетчик рекуприации *</p>
                </div>
                <div class="col-12 pl-4">
                  <base-input
                    type="text"
                    placeholder="9999"
                    v-model="selectedTask.recuperationCounter"
                  >
                  </base-input>
                </div>
                <div class="col-12 mb-2">
                  <p>Счетчик электрооптл.ваг. *</p>
                </div>
                <div class="col-12 pl-4">
                  <base-input
                    type="text"
                    placeholder="9999"
                    v-model="selectedTask.electricCounter"
                  >
                  </base-input>
                </div>
              </div>

              <br /><br /><br />
              <div class="col-3 btn btn-info" @click="send()">
                Отправить данные
              </div>
              <div class="col-2 btn btn-secondary px-0" @click="save()">
                Сохранить
              </div>
            </div>
          </div>
          <div
            class="card custom-card p-4"
            v-if="selectedTask.taskCategory == 'LocoSubmission'"
          >
            <div class="card-body">
              <div class="row">
                <p class="my-3 h4">{{ selectedTask.name }}</p>

                <div class="col-12 mb-2">
                  <p>Дата и время сдачи *</p>
                </div>
                <div class="col-4">
                  <date-picker
                    placeholder="17 September, 2022"
                    format="MM/dd/yyyy"
                    v-model="selectedTask.time"
                  />
                </div>
                <div class="col-8 pl-4">
                  <base-input
                    type="text"
                    placeholder="19:53"
                    v-model="selectedTask.hour"
                  >
                  </base-input>
                </div>
                <div class="col-12 mb-2">
                  <p>Cчетчик рекуприации *</p>
                </div>
                <div class="col-12 pl-4">
                  <base-input
                    type="text"
                    placeholder="9999"
                    v-model="selectedTask.recuperationCounter"
                  >
                  </base-input>
                </div>
                <div class="col-12 mb-2">
                  <p>Счетчик электрооптл.ваг. *</p>
                </div>
                <div class="col-12 pl-4">
                  <base-input
                    type="text"
                    placeholder="9999"
                    v-model="selectedTask.electricCounter"
                  >
                  </base-input>
                </div>
                <div class="col-md-12">
                  <base-input>
                    <textarea
                      class="form-control"
                      rows="3"
                      placeholder="Локомотив исправен, все детали на месте, датчики показывают правильные 
  данные. Есть маленькая неполадка в грузовом отсеке, но не критичная."
                      v-model="selectedTask.comments"
                    >
                    </textarea>
                  </base-input>
                </div>
                <div class="col-md-12">
                  <base-input>
                    <textarea
                      class="form-control"
                      rows="3"
                      placeholder="Локомотив исправен, все детали на месте, датчики показывают правильные 
  данные. Есть маленькая неполадка в грузовом отсеке, но не критичная."
                      v-model="selectedTask.comments"
                    >
                    </textarea>
                  </base-input>
                </div>
                <div class="col-md-12">
                  <base-input>
                    <textarea
                      class="form-control"
                      rows="3"
                      placeholder="Локомотив исправен, все детали на месте, датчики показывают правильные 
  данные. Есть маленькая неполадка в грузовом отсеке, но не критичная."
                      v-model="selectedTask.comments"
                    >
                    </textarea>
                  </base-input>
                </div>
              </div>

              <br /><br /><br />
              <div class="col-3 btn btn-info" @click="send()">
                Отправить данные
              </div>
              <div class="col-2 btn btn-secondary px-0" @click="save()">
                Сохранить
              </div>
            </div>
          </div>
          <div
            class="card custom-card p-4"
            v-if="selectedTask.taskCategory == 'StationData'"
          >
            <div class="card-body">
              <p class="my-3 h4">{{ selectedTask.name }}</p>
              <div class="row">
                <div class="col-12 h4">Дата и время</div>
                <div class="col-12 mb-2">
                  <p>Дата и время приема локомотива *</p>
                </div>
                <div class="col-4">
                  <date-picker
                    placeholder="17 September, 2022"
                    format="MM/dd/yyyy"
                    v-model="selectedTask.arrivalTime"
                  />
                </div>
                <div class="col-8 pl-4">
                  <base-input
                    type="text"
                    placeholder="19:53"
                    v-model="selectedTask.hour"
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
                    v-model="selectedTask.departureTime"
                  />
                </div>
                <div class="col-8 pl-4">
                  <base-input
                    type="text"
                    placeholder="19:53"
                    v-model="selectedTask.hour"
                  >
                  </base-input>
                </div>
                <div class="col-12 mb-2">
                  <p>Масса нетто *</p>
                </div>
                <div class="col-12 pl-4">
                  <base-input
                    type="text"
                    placeholder="9999 кг"
                    v-model="selectedTask.weightNetto"
                  >
                  </base-input>
                </div>
                <div class="col-12 mb-2">
                  <p>Масса брутто *</p>
                </div>
                <div class="col-12 pl-4">
                  <base-input
                    type="text"
                    placeholder="9999 кг"
                    v-model="selectedTask.weightBrutto"
                  >
                  </base-input>
                </div>
                <div class="col-12 mb-2">
                  <p>Цистерна *</p>
                </div>
                <div class="col-12 pl-4">
                  <base-input
                    type="text"
                    placeholder="9999"
                    v-model="selectedTask.cisterns"
                  >
                  </base-input>
                </div>
                <div class="col-12 mb-2">
                  <p>Состав поезда в осях *</p>
                </div>
                <div class="col-12 pl-4">
                  <base-input
                    type="text"
                    placeholder="10"
                    v-model="selectedTask.axesComposition"
                  >
                  </base-input>
                </div>
              </div>

              <br /><br /><br />
              <div class="col-3 btn btn-info" @click="send()">
                Отправить данные
              </div>
              <div class="col-2 btn btn-secondary px-0" @click="save()">
                Сохранить
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.btn-success {
  background-color: #8feab9;
  color: #00883f;
  background-image: none;
}
</style>
