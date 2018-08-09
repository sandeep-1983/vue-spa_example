<template>
    <div>
        <div id='myFamilyPage'>I am Family</div>
        <img src="../../../assets/neue_helvetica.png" alt="FAMILY IMAGE">
        <ul>
            <li>
                <a data-val='' v-on:click="onClick"> go to SPA Dashboard</a>
            </li>
            <li>
                <a data-val='Search' v-on:click="onClick"> go to SPA Search</a>
            </li>
        </ul>
    </div>
</template>

<script src="./family.js"></script>
