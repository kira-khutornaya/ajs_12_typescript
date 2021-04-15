import Movie from '../domain/Movie';
import Cart from '../services/Cart';

describe('Cart:', () => {
  const avengers = new Movie(
    111,
    'Мстители',
    'The Avengers',
    true,
    'https://cdn.kino.ru/images/originals/1380/32.jpg',
    2012,
    ['США'],
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    500,
  );
  const pirates = new Movie(
    222,
    'Пираты Карибского моря',
    'Pirates of the Caribbean: The Curse of the Black Pearl',
    false,
    'https://cdn.idntimes.com/content-images/community/2019/01/7-80f3ff384cb7294127fc9d73a25c9363_600x400.jpg',
    2003,
    ['США'],
    'Over 3000 islands of paradise. For some it’s a blessing. For others… It’s A Curse',
    ['фэнтези', 'боевик', 'приключения'],
    143,
    360,
  );
  const cart = new Cart();

  describe('add method:', () => {
    test('should add instance of Movie', () => {
      cart.add(avengers);
      expect(cart.items).toContainEqual(avengers);
      expect(cart.items.length).toBe(1);
    });
  });

  describe('totalPrice method:', () => {
    test('should calculate total price correctly', () => {
      cart.add(pirates);
      expect(cart.totalPrice()).toBe(860);
    });
  });

  describe('totalPriceWithDiscount method:', () => {
    test('should calculate total price with discount correctly', () => {
      expect(cart.totalPriceWithDiscount(15)).toBe(731);
    });
  });

  describe('deleteItem method:', () => {
    test('should delete movie from the cart by its id', () => {
      expect(cart.deleteItem(111)).toBeTruthy();
      expect(cart.items).not.toContainEqual(avengers);
    });

    test('should work with a non-existent id', () => {
      expect(cart.deleteItem(555)).toBeFalsy();
    });
  });
});
