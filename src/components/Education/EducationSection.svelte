<script lang="ts">
  export let school: string;
  export let degree: string;
  export let fieldOfStudy: string;
  export let startDate: Date;
  export let endDate: Date | undefined;
</script>

<section class="flex-column md:flex print:flex justify-between">
  <div>
    <h3 class="text-lg font-bold">{school}</h3>
    <div>{degree}</div>
    <div>{fieldOfStudy}</div>
  </div>
  <div class="text-gray-600">
    {startDate.getFullYear()} - {endDate?.getFullYear() || 'Present'}
  </div>
</section>
