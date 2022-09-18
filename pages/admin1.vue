<script>
import { Table, TableColumn } from "element-ui";

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
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
      tableData: [],
    };
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
                <li class="nav-item my-2">
                  <a class="nav-link active" aria-current="page" href="#"
                    ><p class="mt-2">Astana - Almaty</p>
                    <p>Исполнитель: Даниял Серик</p></a
                  >
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
                <p>Маршрут: Астана - Алматы</p>
              </div>
              <div class="col-4">
                <p>Время:</p>
                <p>20:42:21</p>
              </div>
              <div class="col-12">
                <hr />
              </div>
              <div class="col-12">
                <el-table
                  header-cell-class-name="table-transparent"
                  header-row-class-name="table-transparent"
                  row-class-name="table-transparent"
                  :data="tableData"
                >
                  <el-table-column
                    min-width="150"
                    label="Название"
                    property="name"
                  ></el-table-column>
                  <el-table-column
                    min-width="150"
                    label="Последнее изменение:"
                    property="country"
                  ></el-table-column>
                  <el-table-column
                    min-width="150"
                    label="Статус"
                    property="city"
                  ></el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
