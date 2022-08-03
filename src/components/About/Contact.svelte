<script lang="ts">
  import type { Contact } from '$types/resumeData';
  import { decorateURL } from '$utils';

  export let contact: Contact;
  const { email, linkedin, github } = contact;
</script>

<div>
  <ul class="md:flex md:space-x-3">
    <li>
      <span class="inline-block w-4 h-4 text-[#ea4335] text-center">
        <i class="fa-solid fa-envelope" />
      </span>
      <a class="underline" href={`mailto:${email}`}>
        {email}
      </a>
    </li>
    <li>
      <span class="inline-block w-4 h-4 text-[#0072b1] text-center">
        <i class="fa-brands fa-linkedin" />
      </span>
      <a class="underline" href={`${decorateURL(linkedin)}`}>
        {linkedin}
      </a>
    </li>
    <li>
      <span class="inline-block w-4 h-4 text-[#333333] text-center">
        <i class="fa-brands fa-github" />
      </span>
      <a class="underline" href={`${decorateURL(github)}`}>
        {github}
      </a>
    </li>
  </ul>
</div>
