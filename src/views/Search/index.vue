<template>
    <div>
        <div id='mySearchPage'>SEARCH</div>
        <img src="../../../assets/calm.png" alt="SEARCH IMAGE">
        <ul>
            <li>
                <a data-val='' v-on:click="onClick"> go to SPA Dashboard</a>
            </li>
            <li>
                <a data-val='Family' v-on:click="onClick"> go to SPA Family</a>
            </li>
        </ul>
    </div>
</template>

<script src="./search.js"></script>

