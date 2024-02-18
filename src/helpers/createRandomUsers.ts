import { allFakers } from '@faker-js/faker';
import { Locale } from 'src/store/slice/fakerUsers.slice';

type CreateRandomUserArguments<T> = {
  locale: Locale;
  usersState: T[];
  seed?: number;
  page: number;
};

export default function createRandomUser<T>(
  args: CreateRandomUserArguments<T>
): T[] {
  const { locale, usersState, seed, page } = args;

  const fakers = allFakers[locale];

  if (seed !== 0 && seed) {
    fakers.seed(seed + page);
  }

  const users: T[] = [...usersState];

  const countUsers = users.length >= 20 ? 10 : 20;

  for (let i = 0; i < countUsers; i += 1) {
    const user = {
      address: `${fakers.location.street()}, ${fakers.location.state()}`,
      index: users.length,
      phone: fakers.phone.number(),
      uid: fakers.string.uuid(),
      username: fakers.person.fullName(),
    } as T;

    users.push(user);
  }

  return users;
}
