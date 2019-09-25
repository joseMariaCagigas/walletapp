<?php

use Faker\Generator as Faker;

$factory->define(App\Transfer::class, function (Faker $faker) {
    return [
        'description' => $faker->text($maxNbChars = 100),
        'amount' => $faker->numberBetween($min = 100, $max = 90),
        'wallet_id' => $faker->randomDigitNotNull
    ];
});

