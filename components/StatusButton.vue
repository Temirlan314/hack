<script>
    export default {
        props: ["status"],
        data() {
            return {
                statuses: {
                    Draft: "badge-soft-danger",
                    Approved: "badge-soft-success",
                    Accepted: "badge-soft-success",
                    Upcoming: "badge-soft-primary",
                    Canceled: "badge-soft-danger",
                    Complete: "badge-soft-success",
                    Locked: "badge-soft-danger",
                    Active: "badge-soft-success",
                    "Not active:": "badge-soft-danger",
                    "Litigation not found": "badge-soft-success",
                    "In moderation": "badge-soft-primary",
                    "Not started": "badge-soft-danger",
                    "In progress": "badge-soft-primary",
                    "On signing": "badge-soft-primary",
                    Declined: "badge-soft-danger",
                    Execution: "badge-soft-primary",
                    Completed: "badge-soft-success",
                    Signed: "badge-soft-success",
                    "Funds received": "badge-soft-primary",
                    "Funds transferred": "badge-soft-success",
                    Expired: "badge-soft-danger",
                    Sent: "badge-soft-primary",
                    Applied: "badge-soft-success",
                    Unpaid: "badge-soft-danger",
                    Paid: "badge-soft-success",
                    Withdrawn: "badge-soft-danger",
                    Resigned: "badge-soft-danger",
                    success: "btn-success",
                    pending: "btn-warning",
                    future: "btn-info",
                },
            };
        },
    };
    </script>
    
    <template>
        <div>
            <div class="btn px-4" :class="statuses[status] ? statuses[status] : 'btn-danger'">{{ status == "success" ? "Завершен" : status == "pending" ? "В процессе" : status == "future" ? "Ожидается" : status}}</div>
        </div>
    </template>
    