import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    // System Under Test
    const sut = createSut('Camiseta', 49.9);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.9);
  });
});
