const num1 = document.getElementById('num1') as HTMLInputElement | null;
const num2 = document.getElementById('num2') as HTMLInputElement | null;
const result = document.getElementById('result') as HTMLInputElement | null;;
const plus = document.getElementById('plus');
const moins = document.getElementById('moins');
const div = document.getElementById('div');
const fois = document.getElementById('fois');

const ajout = () => 
{
  const v1 = num1?.value || '0';
  const v2 = num2?.value || '0';

  const response = parseFloat(v1) + parseFloat(v2);

  if (result) {
    result.value = String(response);
  }
}
    
plus?.addEventListener('click', ajout);
 
const soustraction = () => 
{
  const v1 = num1?.value || '0';
  const v2 = num2?.value || '0';

  const response = parseFloat(v1) - parseFloat(v2);

  if (result) {
    result.value = String(response);
  }
}

moins?.addEventListener('click', soustraction);

const divison = () => 
{
  const v1 = num1?.value || '0';
  const v2 = num2?.value || '0';

  const response = parseFloat(v1) / parseFloat(v2);

  if (result) {
    result.value = String(response);
  }
}

div?.addEventListener('click', divison);

const multiplication = () => 
{
  const v1 = num1?.value || '0';
  const v2 = num2?.value || '0';

  const response = parseFloat(v1) * parseFloat(v2);

  if (result) {
    result.value = String(response);
  }
}

fois?.addEventListener('click', multiplication)