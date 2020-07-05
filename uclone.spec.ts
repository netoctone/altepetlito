import { Clonable, uclone } from './uclone';

const c_boolean_true: boolean = true;
const c_boolean_false: boolean = false;

const c_number_1: number = 1;
const c_number_0: number = c_number_1 - c_number_1;
const c_number_minus1: number = c_number_0 - c_number_1;

const c_string_empty: string = "";
const c_string_unicode: string = "⊜";

const c_null: null = null;

const c_undefined_yet = undefined;

const c_clonable_1: Clonable = {
  c_boolean_true,
  c_boolean_false,
  c_number_1,
  c_number_0,
  c_number_minus1,
  c_string_empty,
  c_string_unicode,
  c_null,
  c_undefined_yet
}

const c_clonable_array_1: Clonable[] = [
  c_clonable_1,
  c_boolean_true,
  c_boolean_false,
  c_number_1,
  c_number_0,
  c_number_minus1,
  c_string_empty,
  c_string_unicode,
  c_null,
  c_undefined_yet
];

const c_clonable_2 = {
  c_clonable_1,
  c_clonable_array_1
};

const c_clone = uclone(c_clonable_2);

console.log(
  `
  JSON.stringify(c_clonable_2)
  ⊜
  ${JSON.stringify(c_clonable_2)}`
);

console.log(
  `
  JSON.stringify(c_clone)
  ⊜
  ${JSON.stringify(c_clone)}
 `
);

console.log(
  `
  JSON.stringify(c_clonable_2) === JSON.stringify(c_clone)
  ⊜
  ${JSON.stringify(c_clonable_2) === JSON.stringify(c_clone)}
  `
);

/* begin - work in progress 
 *
 *
 *

  console.log(
    `
    c_clone.c_clonable_1.c_boolean_true = false;
    c_clone.c_clonable_array_1[0] = { ['null']: null };
    c_clone.c_clonable_array_1[1] = false;
    `
  );
  c_clone.c_clonable_1.c_boolean_true = false;
  c_clone.c_clonable_array_1[0] = { ['null']: null };
  c_clone.c_clonable_array_1[1] = false;

  console.log(
    `
    JSON.stringify(c_clone)
    ⊜
    ${JSON.stringify(c_clone)}
    `
  );

  console.log(
    `
    JSON.stringify(c_clonable_2)
    ⊜
    ${JSON.stringify(c_clonable_2)}
    `
  );

 *
 *
 *
 * work in progress - end */

