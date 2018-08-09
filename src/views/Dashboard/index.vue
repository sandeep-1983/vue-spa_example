<template>
    <div>
        <div id='myDashboardPage'><h1><b>DASHBOARD</b></h1></div>
        <img src="../../../assets/walbaum.jpg" alt="DASHBOARD IMAGE">
        <ul>
            <li>
                <a data-val='Search' v-on:click="onClick"> go to SPA Search</a>
            </li>
            <li>
                <a data-val='Family' v-on:click="onClick"> go to SPA Family Page</a>
            </li>
        </ul>
    </div>
</template>
<script src="./dashboard.js"></script>
