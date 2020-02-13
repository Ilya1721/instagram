<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'place' => $faker->city,
        'photo' => 'https://cdn.glitch.com/d7d46297-c2d4-410e-a289-79b7d4e1cc56%2Fgirl.jpg',
    ];
});
