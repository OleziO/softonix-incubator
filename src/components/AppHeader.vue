<template>
  <header class="flex w-full justify-center items-center p-4 border-b border-gray">
    <nav>
      <ul class="flex gap-4 text-blue-500">
        <li class="hover:text-blue-700">
          <RouterLink activeClass="text-blue-800" to="/jobOpening">Job Openings</RouterLink>
        </li>
        <li class="hover:text-blue-700">
          <RouterLink activeClass="text-blue-800" to="/contacts">Contacts</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
