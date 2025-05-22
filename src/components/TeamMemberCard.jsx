function TeamMemberCard({ name, role, city, image }) {
  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <img
        src={image || "https://via.placeholder.com/300x400?text=Full+Image"}
        alt={name}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 rounded-lg px-4 py-2 text-white text-center w-[90%] max-w-[90%]">
        <p className="font-bold text-sm sm:text-base">{name}</p>
        <p className="text-sm text-rose-300">{role}</p>
        <p className="text-sm text-gray-400">{city}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
