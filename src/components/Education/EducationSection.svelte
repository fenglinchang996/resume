<script lang="ts">
  export let school: string;
  export let degree: string;
  export let fieldOfStydy: string;
  export let startDate: Date;
  export let endDate: Date;
</script>

<section class="md:flex md:justify-between">
  <div>
    <h3 class="text-lg font-bold">{school}</h3>
    <div>{degree}</div>
    <div>{fieldOfStydy}</div>
  </div>
  <div class="text-gray-600">
    {startDate.getFullYear()} - {endDate.getFullYear()}
  </div>
</section>
